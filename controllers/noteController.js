import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const addNote = async (req,res) => {
    try{
        const{titleData,content} = req.body
        const newNote = await prisma.note.create({
            data: {
                title:titleData,
                content:content,
            },
        });
        console.log(newNote)

        res.status(200).json({message:'Successful'})
    }catch(error){
        console.error('Error adding note:', error)
        return res.status(500).json({message: 'Internal server error'})
    }
}

export const getNotes = async (req,res)=>{
    try{
        const notes = await prisma.note.findMany()
        res.status(200).json(notes);
    }catch(error){
        console.error('Error getting notes:', error)
        res.status(500).json({message: 'Internal server error'})
    }
}

export const deleteNote = async (req, res) => {
    try {
        const { id } = req.query;
        const noteId = parseInt(id); 
        const deletedNote = await prisma.note.delete({
            where: {
                id: noteId,
            },
        });

        res.status(200).json({ message: 'Note deleted successfully', deletedNote })
    } catch (error) {
        console.error('Error deleting note:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}
