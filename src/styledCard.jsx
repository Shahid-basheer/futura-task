export default function StyledCard() {
    return <section>
        <div style={{ width: "25rem", height: "20rem" }} className='card-hover'>
            <img style={{ position: "absolute", zIndex: "-1", width: "25rem", height: "20rem" }}
                src="https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?w=1380&t=st=1696666381~exp=1696666981~hmac=48b226a49c48331503d020a4bbf119bfb1a27af6a063a19a798d63b1da641876"
                alt="" />
            <div style={{ display: "flex", alignItems: "flex-start", position: "absolute", zIndex: "2", width: "25rem" }}>
                <p className='text-center text-light card-p '
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita facilis sapiente rerum optio quisquam, id minus earum nesciunt fuga,
                    tempore soluta quasi inventore velit recusandae. Molestias consequuntur modi eveniet. Eos?</p>
            </div>
            <div style={{ display: "flex", width: "25rem", height: '20rem', alignItems: "flex-end" }}>
                <div className='card-div'>
                </div>
            </div>
        </div>
    </section>
}