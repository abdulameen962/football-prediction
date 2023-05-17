#for rss feeds for blogs
from django.contrib.syndication.views import Feed
from django.template.defaultfilters import truncatewords
from django.urls import reverse_lazy
from .models import Blog

class LatestPostFeed(Feed):
    title = "Latest Sport news"
    link = reverse_lazy("blogs")
    description = "New Post"

    def items(self):
        return Blog.new_manager.all()

    def item_title(self,item):
        return item.title

    def item_description(self, item):
        return truncatewords(item.body,40)

