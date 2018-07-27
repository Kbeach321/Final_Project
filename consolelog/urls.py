"""consolelog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings

from consolelog_app.views import IndexView, GamesListCreateAPIView, UsersListCreateAPIView, \
                                GamesProxyView


urlpatterns = [
    path('', IndexView.as_view(), name='index'),

    path('admin/', admin.site.urls),

    # User Authentification -- Create / Delete User #
    path('auth/', include("djoser.urls")),
    path('auth/', include("djoser.urls.authtoken")),
    # path('/auth/users/create/',  ),




    path('proxy/games/', GamesProxyView.as_view(), name='games'),
    path('games/<int:pk>/', GamesListCreateAPIView.as_view(), name='games-id'),

    path('users/', UsersListCreateAPIView.as_view(), name='users'),
    path('users/<int:pk>/', UsersListCreateAPIView.as_view(), name='users-id'),


]

from django.conf.urls.static import static
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
