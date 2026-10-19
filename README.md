# Discord Auto Sweeper

A Discord bot built with Node.js and Discord.js that monitors selected voice channels and automatically clears a configured text channel when all monitored voice channels become empty.

## About This Project

This project was originally created to automate the process of clearing a Discord text channel once activity in specific voice channels had ended.

It also served as a learning project for working with Discord APIs, persistent storage, command handling, and event-driven development using Node.js.

## Features

- Dynamic command loading
- Server-specific configuration
- SQLite persistence using Enmap
- Configurable text channel whitelist
- Configurable voice channel monitoring
- Automatic channel cleanup when monitored voice channels become empty
- Permission-restricted commands for server owners and developers

## Technologies Used

- JavaScript
- Node.js
- Discord.js
- Enmap
- SQLite
- ESLint

## How It Works

The bot allows a server owner to:

1. Configure a text channel for bot commands and cleanup operations.
2. Select one or more voice channels to monitor.
3. Automatically trigger a channel sweep when all monitored voice channels become empty.

Configuration is stored locally using Enmap and SQLite, allowing settings to persist across bot restarts.

## Project Structure

```text
commands/
├── database.js
├── help.js
├── ping.js
├── reload.js
├── server.js
├── sweep.js
├── test.js
├── white-t-channel.js
└── white-v-channels.js

data/
└── README.md

index.js
package.json
package-lock.json
README.md
```

## What I Learned

This project helped me develop experience with:

- Event-driven programming
- Working with third-party APIs
- Persistent data storage
- Configuration management
- Command parsing
- Error handling
- JavaScript project structure
- Git and source control
- Building and maintaining a complete software project

## Notes

Sensitive configuration values, database files, and runtime-generated data have been excluded from this repository.

The `data` directory contains documentation only. SQLite database files are generated automatically when the bot is run and are not included in source control.

This repository is intended to showcase the project's implementation and structure rather than serve as a production-ready deployment package.

## Licence

This project is provided for educational, learning, and portfolio purposes.
