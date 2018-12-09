module.exports = function(app, db) {
    
    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        // Retrieve note from db here
        res.send(req.params.id);
    });
    
    app.post('/notes', (req, res) => {
        // Create note in db here
        console.log(req.body.noteTitle);
        console.log(req.body.noteText);
        res.send(req.body);
    });

    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        // Delete note from db here
        res.send(req.params.id);
    });

    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        // Update note in db here
        console.log(req.body.noteTitle);
        console.log(req.body.noteText);
        res.send(req.body);
    });

};