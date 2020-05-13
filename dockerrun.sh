docker run \
-p 1521:80 \
-d --name story-client \
--mount type=bind,source=$HOME/workspace/story/story-client/nginx,target=/etc/nginx/conf.d \
--mount type=bind,source=$HOME/workspace/story/story-client/dist,target=/usr/share/nginx/html \
story-client
