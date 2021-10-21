export async function loadPostCollection () {
    const client = await mongodb.MongoClient.connect('mongodb+srv://mcreporting:mcreporting@cluster0.tmbyi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
    return client.db('myFirstDatabase').collection('budget-tracker')
}