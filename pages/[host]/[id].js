export default function Id(props) {
	return (
		<div>
			<div>Host: {props.host}</div>
			<div>ID: {props.id}</div>
		</div>
	)
}

export async function getStaticProps({ params }) {
	return {
		props: params
	}
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { host: 'localhost', id: '1' } },
			{ params: { host: 'localhost', id: '2' } },
			{ params: { host: 'localhost', id: '3' } }
		],
		fallback: false // true
	}
}
