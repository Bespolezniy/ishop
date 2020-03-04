from django.db import models

# Create your models here.
class SupportMessage(models.Model):
    theme = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    order_code = models.PositiveIntegerField(blank=True)
    url = models.URLField(max_length=200, blank=True)
    text = models.TextField(max_length=600)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.theme

    class Meta:
        ordering: ['-created']
