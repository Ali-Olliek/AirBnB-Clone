from django.db import models
from housing.models import Housing


class Review (models.Model):
    guest_id = models.IntegerField(null=True, blank=True)
    housing = models.ForeignKey(Housing, on_delete=models.CASCADE)

    class Meta:
        db_table = "Reviews"
