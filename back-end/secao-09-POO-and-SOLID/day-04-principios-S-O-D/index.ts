import express, { Request, Response, Router } from 'express';
import Plants from './Plants';

const app = express();

app.use(express.json());

const plantRouter = Router();

const planta = new Plants();

plantRouter.get('/', async (req: Request, res: Response) => {
    const plants = await planta.getPlants();
    res.status(200).json(plants);
  });

  plantRouter.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const plant = await planta.getPlantById(id);
  
    if (!plant) return res.status(404).json({ message: 'Plant not Found!' });
    res.status(200).json(plant);
  });

  plantRouter.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const deleteSuccess = await planta.removePlantById(id);
  
    if (!deleteSuccess) return res.status(404).json({ message: 'Plant not Found!' });
    res.status(204).end();
});

plantRouter.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const newPlant = req.body;
  
    const plant = await planta.editPlant(id, newPlant);
    res.status(200).json(plant);
  });

  plantRouter.post('/', async (req: Request, res: Response) => {
    const newPlant = req.body;
  
    const plant = await planta.savePlant(newPlant);
    res.status(201).json(plant);
  });

  app.use('/plants', plantRouter);

  app.get('/sunny/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const plant = await planta.getPlantsThatNeedsSunWithId(id);
    res.status(200).json(plant);
  });

app.listen(3000, () => console.log('Ouvindo na porta 3000!'));