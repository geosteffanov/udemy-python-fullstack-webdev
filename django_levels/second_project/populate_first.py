import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'second_project.settings')
import django
django.setup()

import random
from second_app.models import Topic, Webpage, AccessRecord
from faker import Faker

fakegen = Faker()

topics = ['Search', 'Social', 'Marketplace', 'New', 'Games']

def add_topic():
    t = Topic.objects.get_or_create(top_name=random.choice(topics))[0]
    t.save()
    return t
def populate(N=10):

    for entry in range(N):
        # get the topic for the entry
        top = add_topic()
        # create the fake data for that entry
        fake_url = fakegen.url()
        fake_date = fakegen.date()
        fake_name = fakegen.company()

        webpg = Webpage.objects.get_or_create(topic=top, url=fake_url, name=fake_name)[0]
        acc_rec = AccessRecord.objects.get_or_create(name=webpg, date=fake_date)[0]




if __name__ == "__main__":
    print("Populating script!")
    populate(100)
    print("Population complete!")



