import { query } from "express";
import config from "../config";
import { getConection, sql} from "../database/conection";

export const getNotas = async (req, res) => {
    try {
        const query = await getConection();
        const rs = await query.request().query(config.select + "dbo.vw_notas");
        return res.status(201).json(rs.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const postNotas = async (req, res) => {
    try {
        const { nTitulo, nContenido, bFavorito } = req.body;
        const query = await getConection();
        const rs = await query.request()
        .input("nTitulo", sql.NVarChar, nTitulo) 
        .input("nContenido", sql.NVarChar, nContenido) 
        .input("bFavorito", sql.Bit, bFavorito)
        .query(config.exec + `sp_crearNota
            @nTitulo
            ,@nContenido
            ,@bFavorito
        `)
        res.status(201).json(rs.rowsAffected);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const deleteNotas = async (req, res) => {
    try {
        const { iId } = req.body;
        const query = await getConection();
        const rs = await query.request()
        .input("iId", sql.Int, iId)
        .query(config.exec + `sp_borrarNota 
        @iId
        `
        );
        res.status(201).json(rs.rowsAffected);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const updateNotas = async (req, res) => {
    try {
        const { nTitulo, nContenido, bFavorito, iId } = req.body;
        const query = await getConection();
        const rs = await query.request()
        .input("nTitulo", sql.NVarChar, nTitulo) 
        .input("nContenido", sql.NVarChar, nContenido) 
        .input("bFavorito", sql.Bit, bFavorito) 
        .input("iId", sql.Int, iId)
        .query(config.exec + `sp_actualizarNota
            @nTitulo
            ,@nContenido
            ,@bFavorito
            ,@iId
        `)
        res.status(201).json(rs.recordset[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const updateFavorito = async (req, res) => {
    try {
        const { bFavorito, iId } = req.body;
        const query = await getConection();
        const rs = await query.request()
        .input("bFavorito", sql.Bit, bFavorito)
        .input("iId", sql.Int, iId)
        .query(config.exec + `sp_actualizarFav
            @bFavorito
            ,@iId
        `)
        res.status(201).json(rs.rowsAffected);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const getNotasFavoritas = async (req, res) => {
    try {
        const query = await getConection();
        const rs = await query.request().query(config.select + "dbo.vw_notasFavoritas");
        return res.status(201).json(rs.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
};