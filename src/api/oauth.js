import { post } from 'axios'

// Tokens
const clientId = '78335fe6929840789f810cc2a51c3510'
const clientSecret = 'ycbRVMlZVKmnc8P6YbqwenolEJ8acy2q'

// API URL
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()

  body.append('grant_type', 'client_credentials')

  const config = {
    header: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }
  return post(API_URL, body, config)
}

export { getToken }
