// Plants.ts

import fs from 'fs/promises';

interface IPlant {
  id: string,
  breed: string,
  needsSun: boolean,
  origin: string,
  size: number,
  specialCare?: { waterFrequency: number }
}

interface IOpsInfo { createdPlants: number }

class Plants {
  private readonly plantsFile = 'plantsData.json';
  private readonly opsFile = 'opsInfo.json';

  async readFile(): Promise<IPlant[]> {
  const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants = JSON.parse(plantsRaw);
    return plants;
  }

  async writeFile(escrita: IPlant[]): Promise<void> {
    await fs.writeFile(this.plantsFile, JSON.stringify(escrita));
  }

 static findId(id: string, plants: IPlant[]): IPlant | undefined {
    const plantById = plants.find((plant) => plant.id === id);
    return plantById;
  }

  static initPlant(plant: IPlant): IPlant {
    const { id, breed, needsSun, origin, specialCare, size } = plant;
    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const newPlant: IPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: {
        ...specialCare,
        waterFrequency,
      },
      size,
    };

    return newPlant;
  }

  public async getPlants(): Promise<IPlant[]> {
    const result = await this.readFile();
    return result;
  }

  public async getPlantById(
    id: string,
  ): Promise<IPlant | null> {
      const plants = await this.readFile();

    const plantById = Plants.findId(id, plants);
    if (!plantById) return null;
    return plantById;
  }

  public async removePlantById(
    id: string,
  ): Promise<IPlant | null> {
      const plants = await this.readFile();

    const removedPlant = Plants.findId(id, plants);
    if (!removedPlant) return null;

    const newPlants = plants.filter((plant) => plant.id !== id);
    await this.writeFile(newPlants);

    return removedPlant;
  }

  public async getPlantsThatNeedsSunWithId(
    id: string,
  ): Promise<IPlant[]> {
    const plants = await this.readFile();

    const filteredPlants = plants.filter((plant) =>
      plant.id === id
      && plant.needsSun
      && (!plant.specialCare
        || plant.specialCare.waterFrequency > 2));

    return filteredPlants;
  }

  public async editPlant(
    plantId: string,
    newPlant: IPlant,
  ): Promise<IPlant> {
    const plants = await this.readFile();

    const updatedPlants = plants.map((plant) => {
      if (plant.id === plantId) return newPlant;
      return plant;
    });

    await this.writeFile(updatedPlants);
    return newPlant;
  }

  public async savePlant(
    plant: IPlant,
  ): Promise<IPlant> {
    const plants = await this.readFile();

    const newPlant = Plants.initPlant({ ...plant });
    plants.push(newPlant);

    const opsInfoRaw = await fs.readFile(this.opsFile, { encoding: 'utf8' });
    let { createdPlants }: IOpsInfo = JSON.parse(opsInfoRaw);
    createdPlants += 1;
    await fs.writeFile(this.opsFile, JSON.stringify({ createdPlants }));

    await this.writeFile(plants);
    return newPlant;
  }
}

export default Plants;