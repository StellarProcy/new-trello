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

#Installing

1. You can download docker image here: https://hub.docker.com/repository/docker/procy/new-trello
1.1. Choose the folder for installing by: <br/>
```cd {your directory name}``` <br/>
or create it: <br/>
```mkdir {your directory name}``` <br/>
1.2. Type the next command:
```docker pull procy/new-trello:latest``` <br/>
2. When downloading was ended, plese, open <b>another</b> terminal and type next commands: <br/>
```docker exec new-trello rake db:create && rake db:migrate``` <br/>
3. Open localhost:3000 in your browser.

Enjoy!

