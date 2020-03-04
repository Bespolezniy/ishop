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
        order_code = graphene.Int()
        email = graphene.String(required = True)
        url = graphene.String()
    
    def mutate(self, info, theme, text, order_code, email, url): 
        
        message = SupportMessage(
            theme = theme, 
            text = text,  
            order_code = order_code,
            email = email,
            url = url
        )

        message.save()
        return CreateSupportMessage(message = message)
    
    
class Mutation(graphene.ObjectType):
    create_support_message= CreateSupportMessage.Field()