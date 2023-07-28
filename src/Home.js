import React from 'react'
import { Outlet, Link } from "react-router-dom";

import Layout from './Layout'

export default function Home() {




    class TextScramble extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                text: ''
            };
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.frameRequest = null;
            this.frame = 0;
            this.queue = [];
            this.update = this.update.bind(this);
        }

        componentDidMount() {
            this.startAnimation();
        }

        componentWillUnmount() {
            cancelAnimationFrame(this.frameRequest);
        }

        setText(newText) {
            const oldText = this.state.text;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise(resolve => (this.resolve = resolve));
            this.queue = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.queue.push({ from, to, start, end });
            }
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }

        update() {
            let output = '';
            let complete = 0;
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += `<span class="dud">${char}</span>`;
                } else {
                    output += from;
                }
            }
            this.setState({ text: output });
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }

        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }

        startAnimation() {
            const phrases = [
                'Web Developer',
                'Frontend Developer',
                "Freelancer",
                'Learner',
                'Web Designer',

            ];

            let counter = 0;

            const next = () => {
                this.setText(phrases[counter]).then(() => {
                    setTimeout(next, 800);
                });
                counter = (counter + 1) % phrases.length;
            };

            next();
        }

        render() {
            return <div className="text" dangerouslySetInnerHTML={{ __html: this.state.text }} />;
        }
    }




    return (
        <div id='Home'>


            <Layout />
            <div className='container'>
                <div className='row d-flex justify-content-center align-items-center text-center' style={{ marginTop: "100px" }}>
                    <div className='col-lg-12 col-md-12 col-sm-6'>
                        <h1>
                            HEMANG <span className='green'>KATARIYA</span>
                        </h1>
                        {/* <div className=' mt-5' >
                            <span className='atext f-text mt-5 col-lg-6 col-md-6 col-sm-6 ' > I'm a </span><br></br>
                            <span className='atext s-text mt-5 col-lg-6 col-md-6 col-sm-6' id='atext' > Web Developer </span>

                        </div> */}
                        <div>
                            <span className='atext f-text mt-5 col-lg-6 col-md-6 col-sm-6 ' > I'm a </span><br></br>
                            <TextScramble />
                        </div>
                        <button className='butt' >Get In Touch</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
