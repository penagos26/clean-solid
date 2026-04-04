(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flaggedToDelete: false },
        { id: 2, flaggedToDelete: false },
        { id: 3, flaggedToDelete: true },
        { id: 4, flaggedToDelete: false },
        { id: 5, flaggedToDelete: false },
        { id: 7, flaggedToDelete: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.flaggedToDelete );
    
    // Ejemplos de malos nombres
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // TODO: Tarea
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const directoryFiles: number = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification: number = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent: number = 6;


})();


