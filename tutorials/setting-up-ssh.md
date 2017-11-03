# Setting Up SSH on Linux
Follow these step-by-step instructions to setup a new SSH key and learn how to authenticate yourself against sites you'll be visiting.

## Create a Key
If you have no key, or need a new one:

```sh
# create an ssh key
ssh-keygen -q -t rsa -b 4096 -C "mscottx88@gmail.com" -N '' -f /root/.ssh/id_rsa
```

## Add Your Key to the `ssh-agent`
With your new key, add it to the agent:

```sh
# add to ssh agent
eval $(ssh-agent -s) && ssh-add /root/.ssh/id_rsa
```

## Add Sites to `known_hosts`
To authorize a site you want to visit in advance:

```sh
# authorize this
ssh-keyscan -t rsa github.com >> /root/.ssh/known_hosts
```


