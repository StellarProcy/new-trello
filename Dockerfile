FROM ruby:2.6.3
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /new-trello
WORKDIR /new-trello
ADD Gemfile /new-trello/Gemfile
ADD Gemfile.lock /new-trello/Gemfile.lock
RUN bundle install
ADD . /new-trello