import express from 'express'
import taskRouter from './routes/tasks'

const app = express()

app.use(express.json())

const PORT = 3000

app.get('/', (_req, res) => {
    res.send('ok')
})

app.use('/api/tasks', taskRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
