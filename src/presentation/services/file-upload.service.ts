import path from "path";
import fs from "fs";
import { UploadedFile } from "express-fileupload";
import { UUID } from "../../config";
import { CustomError } from "../../domain";

export class FileUploadService {
    constructor(
        private readonly uuid = UUID.v4
    ) { }

    private checkFolder(folderPath: string) {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }
    }

    private verifyExtension(file: UploadedFile, validExtensions: string[]) {
        const mimeTypeExtension = file.mimetype.split("/").at(1) || "";
        if (!validExtensions.includes(mimeTypeExtension)) {
            throw CustomError.badRequest(`El archivo ${file.name} no es una archivo valido, tipos validos [${validExtensions}]`);
        }
    }

    public async uploadMultiple(files: UploadedFile[],
        folder: string = "uploads",
        validExtensions: string[] = ["png", "jpg", "jpeg"]
    ) {
        const  filesName = Promise.all(files.map(file => this.uploadSingle(file, folder, validExtensions)));
        return filesName;                
    }
    public async uploadSingle(
        file: UploadedFile,
        folder: string = "uploads",
        validExtensions: string[] = ["png", "jpg", "jpeg"]
    ) {

        try {
            const fileExtension = file.name.split(".").pop();
            this.verifyExtension(file, validExtensions);
            const fileName = `${this.uuid()}.${fileExtension}`;
            const destination = path.resolve(__dirname, "../../../", folder);
            this.checkFolder(destination);
            file.mv(destination + "/" + fileName);
            return { fileName };
        } catch (error) {
            throw error;
        }


    }

}