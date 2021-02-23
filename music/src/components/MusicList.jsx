import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import { getAll } from "../services/MusicService";
import tableStyle from "../styles/tableStyle";

const MusicList = () => {
  const [musics, setMusics] = useState([]);
  const tbStyle = tableStyle();
  useEffect(() => {
    getAll().then((music) => setMusics(music));
  }, []);
  return (
    <Paper elevation={3} className={tbStyle.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>제목</TableCell>
            <TableCell>언제?</TableCell>
            <TableCell>평점</TableCell>
            <TableCell>한줄평</TableCell>
            <TableCell>주소</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {musics.map((music) => {
            return (
              <TableRow key={`key_${music.id}`}>
                <TableCell>{music.title}</TableCell>
                <TableCell>{music.timing}</TableCell>
                <TableCell>{music.rate}</TableCell>
                <TableCell>{music.comment}</TableCell>
                <TableCell>{music.link}</TableCell>
                <TableCell><DeleteIcon/></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default MusicList;
