#!/bin/bash

function install_node {
  sudo apt-get install nodejs -y
  sudo ln -s /usr/bin/nodejs /usr/bin/node
  sudo apt-get install npm -y
  mkdir ~/.npm-global
  npm config set prefix '~/.npm-global'
  echo "if [ -d \"$HOME/.npm-global/bin\" ] ; then" >> ~/.profile
  echo "  PATH=\"$HOME/.npm-global/bin:$PATH\"" >> ~/.profile
  echo "fi" >> ~/.profile
}

install_node
