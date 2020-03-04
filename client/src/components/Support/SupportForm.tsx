import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { useMutation } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import axios from "axios"

import { makeStyles, Theme } from "@material-ui/core/styles"
import { 
  Box,
  Typography,
  Divider,
  Paper,
  Button,
  MenuItem,
  TextField,
  FormHelperText,
  CircularProgress
 } from "@material-ui/core"
 import { FileCopy, Mail } from "@material-ui/icons"

 import Error from "../Shared/Error"
 import SuccessMessage from "../Shared/SuccessMessage"

const useStyles = makeStyles((theme: Theme) => ({
  formBlock: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(3)
  },
  form: {
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
      flexDirection: "column"
    }
  },
  formItem: {
    margin: theme.spacing(1.5)
  },
  fileInput: {
    display: "none"
  },
  textarea: {
    marginTop: theme.spacing(1.5),
    width: "100%"
  },
  save: {
    color: "#fff",
    borderColor: "#fff"
  }
}))

type Values = {
  uploading: boolean
  theme: string
  email: string
  code: any
  file: any
  text: string
  fileError: string
  success: boolean
}

const SupportForm = () => {

  const [createSupportMessage, { error }] = useMutation(
    CREATE_SUPPORT_MESSAGE_MUTATION, {
      onCompleted: () => {
        setValues({
          ...values, 
          uploading: false,
          theme: "--Выбрать--",
          email: "",
          code: "",
          file: "",
          text: "",
          fileError: "",
          success: true
        })
      },
      onError: () => {
        setValues({
          ...values, 
          uploading: false
        })
      }
    }
  )
  const classes = useStyles()
  const { t } = useTranslation()
  const [values, setValues] = useState<Values>({
    theme: "--Выбрать--",
    email: "",
    code: "",
    file: "",
    text: "",
    fileError: "",
    uploading: false,
    success: false
  })

  const handleImageChange = (event:any) => {
    const selectedFile = event.target.files[0]
    const fileSizeLimit = 10000000

    if (selectedFile && selectedFile.size > fileSizeLimit) {
      setValues({...values, fileError:`${selectedFile.name}: File size too large`})
    } else {
     setValues({
       ...values, 
       fileError:"",
       file: selectedFile
      })
    }
  }

  const handleImageUpload = async () => {

    if (values.file === "") return ""

    try {
      const data = new FormData()
      data.append("file", values.file)
      data.append("resource_type", "raw")
      data.append("upload_preset", "ishop_project")
      data.append("cloud_name", "dkgjpqfz3")
      const res = await axios.post("https://api.cloudinary.com/v1_1/dkgjpqfz3/raw/upload", data)
      return res.data.url
    } catch (error) {
      console.log("Error uploading file", error)
      setValues({...values, uploading: false})
    }

  }

  const handleSubmit = async (event:any, createSupportMessage:any) => {
    event.preventDefault()

    setValues({
      ...values, 
      uploading: true
    })
    const uploadedUrl = await handleImageUpload()
    createSupportMessage({ 
      variables: { 
        theme: values.theme,
        text: values.text,
        orderCode: values.code || 0,
        email: values.email,
        url: uploadedUrl
      }
    })
  }

  const handleChange = (name:string) => (
    event: React.ChangeEvent<{ value: unknown }>
  ):void => {
    setValues({...values, [name]: event.target.value})
  }

  return (
    <Box padding={5}>
      <Typography variant="h4" gutterBottom>
        {t("Служба поддержки - свяжитесь с нами")}
      </Typography>
      <Divider />

      <Paper elevation={4} className={classes.formBlock}>
        <Typography className={classes.formItem} variant="h6" gutterBottom>
          {t("Отправить сообщение")}
        </Typography>

        <form onSubmit={ event => handleSubmit(event, createSupportMessage)}>
          <Box 
            display="flex" 
            justifyContent="space-between"
            className={classes.form}
          >
            <Box display="flex" flexDirection="column">
              <TextField
                id="theme-select"
                select
                label={t("Тема")}
                size="small"
                value={values.theme}
                onChange={handleChange("theme")}
                variant="outlined"
                className={classes.formItem}
                color="secondary"
                required
              >
                <MenuItem value={t("--Выбрать--")}>{t("--Выбрать--")}</MenuItem>
                <MenuItem value={t("Обслуживание покупателей")}>
                  {t("Обслуживание покупателей")}
                </MenuItem>
                <MenuItem value={t("Разработчик")}>{t("Разработчик")}</MenuItem>
              </TextField>

              <TextField
                id="email-input"
                label={t("Ваш email")}
                size="small"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                variant="outlined"
                className={classes.formItem}
                color="secondary"
                required
              />

              <TextField
                id="code-input"
                label={t("Код продукта")}
                size="small"
                type="text"
                value={values.code}
                onChange={handleChange("code")}
                variant="outlined"
                className={classes.formItem}
                color="secondary"
              />

              <input
                id="image" 
                type="file" 
                accept="image/jpg,image/png,image/jpeg"
                className={classes.fileInput}
                onChange={ event => handleImageChange(event)}
              />
                  
              <label 
                className={classes.formItem} 
                htmlFor="image"
              >

                <Button 
                  variant="outlined" 
                  color={values.file ? "secondary" : "inherit"}
                  component="span"
                >
                  <FileCopy />
                  Image (10mb)
                </Button>
                <FormHelperText>
                  {values.file && values.file.name}
                </FormHelperText>

                <FormHelperText error>
                  {values.fileError}
                </FormHelperText>
              </label>
            </Box>

            <Box className={classes.textarea}>
              <TextField 
                multiline
                rows="11"
                label={t("Описание")}
                placeholder={t("Опишите вашу проблему")}
                onChange={handleChange("text")}
                value={values.text}
                variant="outlined"
                fullWidth
                color="secondary"
                required
              />
            </Box>
          </Box>

          <Button 
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.formItem}
            startIcon={
              <Mail />
            }
            disabled = {
              values.uploading ||
              !values.theme.trim() ||
              values.theme.trim() === t("--Выбрать--") ||
              !values.text.trim() ||
              !values.email.trim()
            }
          >
            {
              values.uploading ? 
              (<CircularProgress className={classes.save} size={24} />) : 
                t("Отправить")
            }
          </Button>
        </form>

        {error && <Error error={error} />}
        {values.success && (
          <SuccessMessage text="Ваше сообщение успешно доставлено"/>
        )}
      </Paper>
    </Box> 
  )
}

const CREATE_SUPPORT_MESSAGE_MUTATION = gql`
  mutation (
    $theme: String!, 
    $text: String!, 
    $email: String!,
    $orderCode: Int
    $url: String
  ) {
    createSupportMessage(
      theme: $theme, 
      text: $text, 
      email: $email, 
      orderCode: $orderCode
      url: $url
    ) {
      message {
        id
        theme
        text
        email
        orderCode
      }
    }
  }
`

export default SupportForm