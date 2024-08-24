import React from 'react';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1 className="main-title">Módulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
            <div className="welcome-section">
                <h2>Bienvenido</h2>
                <hr className="green-line" />
                <p>Este módulo se centra en el uso de React, incluyendo la creación de componentes, el manejo de hooks y uso de Redux.</p>
            </div>
            <h2 className="sub-title">Temas cubiertos</h2>
            <hr className="green-line" />
            <table className="topics-table">
                <tbody>
                    <tr>
                        <td>Componentes funcionales y de clase</td>
                        <td>Uso de react hooks como useState y useEffect</td>
                        <td>Creación de custom hooks como useForm</td>
                        <td>Gestión de variables de estado con useState</td>
                        <td>Gestión de estado global con Redux</td>
                        <td>Integración de Redux con React</td>
                        <td>Manejo de formularios en React</td>
                        <td>Publicando nuestra página con GitHub Pages</td>
                    </tr>
                </tbody>
            </table>
            <h2 className="sub-title">Recursos Adicionales</h2>
            <hr className="green-line" />
            <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos.</p>
            <hr className="gray-line" />
            <p className="footer"> © 2024 Módulo 7. USIP.</p>
        </div>
    );
}

export default LandingPage;