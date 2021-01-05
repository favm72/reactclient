import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import TablePagination from "@material-ui/core/TablePagination"

const useStyles = makeStyles({
	cellheader: {
		fontWeight: "bold",
		textAlign: "center"
	},
	cellbody: {
		textAlign: "center"
	}
})

const ClientTable = (props) => {
	const classes = useStyles()
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5)
	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(parseInt(event.target.value, 5))
		setPage(0)
	}
	const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.clients.length - page * rowsPerPage)

	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell className={classes.cellheader}>Nombre</TableCell>
						<TableCell className={classes.cellheader}>Apellido</TableCell>
						<TableCell className={classes.cellheader}>Nacimiento</TableCell>
						<TableCell className={classes.cellheader}>Edad</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.clients
						.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						.map((client, index) => (
							<TableRow key={client._id}>
								<TableCell className={classes.cellbody}>{client.name}</TableCell>
								<TableCell className={classes.cellbody}>{client.lastname}</TableCell>
								<TableCell className={classes.cellbody}>{client.birthdate}</TableCell>
								<TableCell className={classes.cellbody}>{client.age}</TableCell>
							</TableRow>
						))}
					{emptyRows > 0 && (
						<TableRow style={{ height: 53 * emptyRows }}>
							<TableCell colSpan={6} />
						</TableRow>
					)}
				</TableBody>
			</Table>
			<TablePagination
				rowsPerPageOptions={[5]}
				component="div"
				count={props.clients.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</TableContainer>
	);
}

export default ClientTable