import styled from 'styled-components';
import { Theme } from './theme';
const ButtonIS = styled.input`
    background-color: ${Theme.mainColor};
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    :hover {
        background-color: #45a049;
    }
`;

const ConatinerIS = styled.div`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;

    input,
    select,
    textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        resize: vertical;
    }

    label {
        padding: 12px 12px 12px 0;
        display: inline-block;
    }

    .col {
        float: left;
        width: 100%;
        margin-top: 6px;
    }

    .row:after {
        content: '';
        display: table;
        clear: both;
    }
`;

export const EFFeedback = () => {
    return (
        <ConatinerIS className="container">
            <h2>Обратная связь</h2>
            <form action="/action_page.php">
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            id="fname"
                            name="firstname"
                            placeholder="Your name.."
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            id="lname"
                            name="lastname"
                            placeholder="email"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <textarea
                            id="subject"
                            name="subject"
                            placeholder="Write something.."
                        ></textarea>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <ButtonIS type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </ConatinerIS>
    );
};
