export const broadcastConnection = (aWss, callback) => {
  for (const client of aWss.clients) {
    callback(client)
  }
}

export const broadcastOnline = aWss => {
  broadcastConnection(aWss, client => {
    const onlineUsers = []

    aWss.clients.forEach(client => {
      if (!onlineUsers.find(item => item.uuid === client.user.uuid)) {
        onlineUsers.push(client.user)
      }
    })

    const data = {
      type: 'online',
      users: onlineUsers
    }

    client.send(JSON.stringify(data))
  })
}
