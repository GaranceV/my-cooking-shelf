import express from 'express';
import * as recipes from '../models/recipe';

let router = express.Router();

router.get('/:id',function (req, res) {
            console.log(req);
        // recipes.getDevicesByUserId({ userId: req.params.id },function(err, resp) {
                    res.send('you tried');
                    console.log('oho');
        // });
    });

router.get('/',function (req, res) {
    console.log(req);
    res.send('you tried');
});
router.post('/', (req, res) => {
      console.log('Hellooooooooooooooooo!');
      recipes.goDoStuff(req.body);
      res.redirect('/');
    });

export default router;