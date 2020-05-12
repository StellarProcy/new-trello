FROM ruby:2.6.3

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq \
  && apt-get install -y build-essential libpq-dev nodejs yarn
RUN mkdir /new-trello
WORKDIR /new-trello
COPY . .
RUN bundle install
RUN yarn --version && yarn install --check-files

EXPOSE 3000

# RUN chmod +x /bin/entry.sh

# CMD [ "/bin/entry.sh" ]

ENTRYPOINT ["rails", "s", "-b", "0.0.0.0"]