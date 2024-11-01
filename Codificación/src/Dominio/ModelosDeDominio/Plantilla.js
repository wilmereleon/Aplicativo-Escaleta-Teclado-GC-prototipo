class Plantilla {
    constructor() {
      this.ultimaPlantilla = null;
    }
  
    setUltimaPlantilla(plantilla) {
      this.ultimaPlantilla = plantilla;
    }
  
    getUltimaPlantilla() {
      return this.ultimaPlantilla;
    }
  }
  
  module.exports = Plantilla;