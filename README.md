# Discord Auto Sweeper

A Discord bot built with Node.js and Discord.js that monitors selected voice channels and automatically clears a designated text channel when the last user leaves the monitored voice channels.

## About This Project

This project was originally created to automate the process of clearing a designated Discord text channel once activity in specific voice channels had ended.

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

1. Select a text channel for bot commands and cleanup messages.
2. Select one or more voice channels to monitor.
3. Automatically trigger a channel sweep when the final user leaves the monitored voice channels.

Configuration is stored locally using Enmap and SQLite, allowing settings to persist across bot restarts.

## Installation

### Clone the Repository

```bash
git clone https://github.com/devilmarster/discord-auto-sweeper.git
cd discord-auto-sweeper
```

### Install Dependencies

```bash
npm install
```

### Create a Configuration File

Copy:

```text
config.example.json
```

to:

```text
config.json
```

and replace the placeholder values with your own Discord bot token and Discord user ID.

### Start the Bot

```bash
node index.js
```

## Project Structure

```text
commands/
├── database.js
├── help.js
├── ping.js
├── pong.js
├── reload.js
├── server.js
├── sweep.js
├── test.js
├── white-t-channel.js
└── white-v-channels.js

data/

index.js
config.example.json
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

## Future Improvements

Potential future enhancements include:

- Slash command support
- Improved command validation
- Better logging and error reporting
- Additional server management features
- Migration to a newer Discord.js version

## Notes

This repository does not include live database files, bot tokens, or other sensitive configuration data.

Database files are generated automatically when the bot is run and are excluded from source control.
