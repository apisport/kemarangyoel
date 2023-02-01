// import Pesanan from '../../components/admin/cardpesanan'

export default function Datapesanan() {
    return (
        <div>
            <div>
                {/* ======= Hero Section ======= */}
                <section id="hero" className="d-flex align-items-center">
                    <div className="" >
                        <div className=" text-white p-3">
                            <h3 className="text-white table text-center">Data Ruangan/Pondok</h3>
                            <table className="text-white table text-center">
                                <thead>
                                    <tr className="bg-dark">
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th>Kategori</th>
                                        <th>Kapasitas</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody style={{ height: '10px !important', overflow: 'scroll' }}>
                                    <tr>
                                            <td className="filterable-cell">1</td>
                                            <td className="filterable-cell">Ruangan 1</td>
                                            <td className="filterable-cell">Pondok</td>
                                            <td className="filterable-cell">40</td>
                                        <td className="filterable-cell">
                                            <div className="row ">
                                                <div className="col-4">
                                                        <a className="btn d-block btn-success text-white ">Lihat Detail</a>
                                                </div>
                                                <div className="col-4">
                                                        <a className="btn d-block btn-danger text-white ">Edit</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </section>{/* End Hero */}
                <main id="main">
                </main>
            </div>

        </div>

    )
}
