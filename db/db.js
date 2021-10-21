export async function loadPostCollection () {
    const client = await mongodb.MongoClient.connect('mongodb+srv://RMP1992:Jasmine2010!@cluster.frhfb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
    return client.db('myFirstDatabase').collection('users')
}