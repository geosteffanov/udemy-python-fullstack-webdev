from django.shortcuts import render
from second_app.models import Topic, Webpage, AccessRecord

# Create your views here.
# def index(request):
#     my_dict = { 'insert_comment' : "Hello from the second app!"}
#     return render(request, 'second_app/index.html', context=my_dict)


def index(request):
    webpages_list = AccessRecord.objects.order_by('date')
    date_dict = { 'access_records' : webpages_list }

    return render(request, 'second_app/index.html', context=date_dict)