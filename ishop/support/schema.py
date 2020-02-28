from graphene_django import DjangoObjectType
import graphene

from .models import SupportMessage


class SupportMessageType(DjangoObjectType):
    class Meta:
        model = SupportMessage


class Query(graphene.ObjectType):
    messages = graphene.List(SupportMessageType)

    def resolve_messages(self, info):
        return SupportMessage.objects.all()


class CreateSupportMessage(graphene.Mutation):
    message = graphene.Field(SupportMessageType)

    class Arguments:
        theme = graphene.String(required = True)
        text = graphene.String(required = True)
        file_url = graphene.String()
        order_code = graphene.Int(required = True)
        email = graphene.String(required = True)
    
    def mutate(self, info, theme, text, file_url, order_code, email): 
        message = SupportMessage(
            theme = theme, 
            text = text, 
            file_url = file_url, 
            order_code = order_code,
            email = email
        )
        message.save()
        return CreateSupportMessage(message = message)
    
    
class Mutation(graphene.ObjectType):
    create_support_message =CreateSupportMessage.Field()