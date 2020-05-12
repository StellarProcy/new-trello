# New-trello app

This is just some app with some trello app functional.

You can:
* create boards
* sharing board between your friends(or foes)
* create columns on boards
* create cards on boards
* change title of card
* move card between columns
* delete columns
* delete cards

If you want to delete card - please, click on the small red rectangle rigth of drop down menu.

For change title of card - please, click on the small green rectangle rigth of the small red rectangle.

Want to move card betwen columns? Just click on drop down menu in card and choose the column.

For sharing board just copy the URL of board and send it.

This is the link of app: https://new-trello-procy.herokuapp.com/

Local version is under construction.

Have a nice time management!

<b>Install (Linux)</b> 
Be sure what your docker and docker-compose are alredy installed! <br/>
(you can check it by: <br/>
```docker -v``` and <br/>
```docker-compose -v``` <br>

1. You can download docker image here: https://hub.docker.com/repository/docker/procy/new-trello <br/>
1.Type the next command: <br/>
```docker pull procy/new-trello:latest``` <br/>
2. When downloading was ended, write command: <br/>
```docker-compose up``` <br/>
wait, and then, <b>in another terminal</b> write the next command: <br/>
```docker exec new-trello_new-trello_1 rake db:create && docker exec new-trello_new-trello_1 rake db:migrate``` <br/>
3. Open <br/> ```localhost:3000``` <br/> in your browser.

Enjoy!

