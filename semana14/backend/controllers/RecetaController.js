import Receta from "../models/RecetaModel.js";

const getRecetas = async ( req, res) => {
    try {
        
        const { userId, rol  } = req;
        const filter = rol == 'admin' ? {} : { usuario: userId };
        const recetas = await Receta.find( filter ).populate('usuario', 'nombre');

        console.log('GET')
        res.status(200).json({ msg: 'Ok', data: recetas});
    } catch (error) {
        console.error({error});
        res.status(500).json({ msg:'Error al obtener las recetasxx', data: []});
    }
}

const postReceta = async (req, res) => {
    try {

        const { nombre, tiempo, detalle} = req.body;
        if( !nombre || !tiempo){
            res.status(401).json({ msg: "Faltan campos obligatorios"});
            return;
        }
        const userId = req.userId;
        console.log({userId});
        const usuario = { _id: userId }

        const receta = new Receta({ nombre, tiempo, detalle, usuario })
        await receta.save();

        res.status(202).json({ msg: 'Receta Creada', data: receta});
    } catch (error) {
        console.error({error});
        res.status(500).json({ msg:'Error al obtener las recetas', data: []});
    }
}

const putReceta = async (req, res) => {
    try {
        const _id = req.params.id;

        const { nombre, tiempo, detalle, portada, userId} = req.body;
        if( !nombre || !tiempo){
            res.status(401).json({ msg: "Faltan campos obligatorios"});
            return;
        }

        const usuario = { _id: userId }

        const receta = await Receta.findOneAndUpdate(
            { _id, usuario },
            { 
                ...( nombre != undefined ? { nombre } : {} ),
                ...( detalle != undefined ? { detalle } : {} ),
                ...( portada != undefined ? { portada } : {} ),
            },
            { new: true}
        )

        res.status(202).json({ msg: 'Receta Creada', data: receta});
    } catch (error) {
        console.error({error});
        res.status(500).json({ msg:'Error al obtener las recetas', data: []});
    }
}

export { getRecetas, postReceta, putReceta }