from django.contrib.auth.models import User
from rest_framework import serializers

from snippets.models import Snippet


class SnippetSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    highlight = serializers.HyperlinkedIdentityField(view_name='snippet-highlight', format='html')

    class Meta:
        model = Snippet
        fields = ('url', 'id', 'owner', 'title', 'code', 'linenos', 'language',
                  'highlight', 'style', 'created')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    snippets = serializers.HyperlinkedRelatedField(many=True, queryset=Snippet.objects.all(), view_name='snippet-detail')

    class Meta:
        model = User
        fields = ('url', 'id', 'username', 'snippets')
