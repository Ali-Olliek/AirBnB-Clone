from django.db import models

class Housing (models.Model):
    location = models.CharField(max_length=150)
    description = models.CharField(max_length=150, blank=True, null=True)
    date_from = models.DateField()
    date_till = models.DateField()
    pricing = models.FloatField()
    guests_number = models.IntegerField()
    images = models.ImageField(upload_to='assets/')

    class Meta:
        db_table = "Housings"

    def __str__(self):

        house = {
            "location": self.location,
            "description": self.description,
            "from": self.date_from,
            "till": self.date_till,
            "pricing": self.pricing,
            "guests": self.guests_number,
        }

        return str(house)