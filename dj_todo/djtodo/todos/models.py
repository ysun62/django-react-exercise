from django.db import models

class Todo(models.Model):
    title = models.TextField()
    completed = models.BooleanField()

    def __str__(self):
        return self.title