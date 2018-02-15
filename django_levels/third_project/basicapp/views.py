from django.shortcuts import render

from . import forms

# Create your views here.
def index(request):
    return render(request, 'basicapp/index.html')


def form_name_view(request):
    form = forms.FormName()

    if request.method == "POST":
        form = forms.FormName(request.POST)

        if form.is_valid():
            # DO SOMETHING CODE
            print("Validation complete!")
            print("Name: {}".format(form.cleaned_data["name"]))
            print("Email: {}".format(form.cleaned_data["email"]))
            print("Text: {}".format(form.cleaned_data["text"]))


    return render(request, 'basicapp/form_page.html', {'form' : form })
