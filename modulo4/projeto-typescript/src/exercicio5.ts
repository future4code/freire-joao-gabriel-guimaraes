const usuarios: user[] = [
	{ name: "Rogério", email: "roger@email.com", role: "user" },
	{ name: "Ademir", email: "ademir@email.com", role: "admin" },
	{ name: "Aline", email: "aline@email.com", role: "user" },
	{ name: "Jéssica", email: "jessica@email.com", role: "user" },
	{ name: "Adilson", email: "adilson@email.com", role: "user" },
	{ name: "Carina", email: "carina@email.com", role: "admin" }
]

type user = {
	name: string,
	email: string,
	role: string,
}

function usuario(array: user[]): string[] {
	const filteredArray = array.filter((user) => {
		return user.role === 'admin'
	})
		.map((user) => {
			return user.email
		})
	return filteredArray
}

console.log(usuario(usuarios))