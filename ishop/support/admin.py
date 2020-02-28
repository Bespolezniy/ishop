from django.contrib import admin

from .models import SupportMessage
# Register your models here.

@admin.register(SupportMessage)
class SupportMessageAdmin(admin.ModelAdmin):
    list_display = ('order_code', '__str__', 'created', 'email')
    list_filter = ['created', 'order_code']
    search_fields = ('email', 'order_code',)
