import store from '@/store'

async function createStory(title, content) {
    let requestBody = {
        query: `mutation CreatePublicationStory {
            createPublicationStory(publicationId: "${store.state.publicationId}", input: { title: "${title}", contentMarkdown: "${content}", tags: [] }) {
                code,
                success,
                message
            }
        }`
    }

    let response = await fetch('https://api.hashnode.com', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': store.state.apiKey,
        },
    })

    let responseBody = await response.json()

    if(responseBody.errors && responseBody.errors.length > 0)
        throw Error(responseBody.errors.map(e => e.message).join(', '))

    return responseBody.data
}

export default {
    createStory
}