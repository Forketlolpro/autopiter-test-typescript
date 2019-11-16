import React, {Component, createRef} from 'react';
import DadataResult from './DadataResult/DadataResult';
import axios from '../axios-instance';
import styles from './Dadata.module.scss';

export type Suggestions = {
    value: string,
    unrestricted_value: string
    data: SuggestionsData
}

export type SuggestionsData = {
    kpp: string,
    
}


export type DadataState = {
    inputValue: string
    suggestions: any
    closed: boolean
}

export interface DadataProps  {
    title?: string,
    onSuggestionSelect: (item: any) => void;
}


class Dadata extends Component<DadataProps, DadataState> {
    private componentNode = createRef<HTMLDivElement>();

    constructor (props: DadataProps) {
        super(props);
        this.state = {
            inputValue: '',
            suggestions: null,
            closed: false
        }

        document.addEventListener('mousedown', this.checkOuterClick, false)
    }

    componentWillUnmount () {
        document.removeEventListener('mousedown', this.checkOuterClick, false)
    }

    checkOuterClick = (e: Event) => {
        const node = this.componentNode.current;
        const target = e.target as HTMLElement;
        if (node) {
            if(!node.contains(target)) {
                this.setState({closed: true})
            }
        }
    }

    async fetchData(value: string) {
        try {
            const res = await axios.post('/', { query: value });
            this.setState({ suggestions: res.data.suggestions });
        } catch (e) {
        }
    }

    onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inputValue: e.target.value,
            closed: false
        })
        this.fetchData(e.target.value)
    }

    onSuggestItemClick = (id: number) => {
        this.setState((state)=>{
            return {
                inputValue: state.suggestions[id].value,
                closed: true
            }
        })

        this.props.onSuggestionSelect(this.state.suggestions[id]);
    }

    render () {
        return (<div className={styles.Dadata} ref={this.componentNode}>
                    <p className={styles.Title}>{this.props.title}</p>
                    <input name='dadataInput'
                        autoComplete="off"
                        value={this.state.inputValue}
                        className={styles.Input}
                        type='text'
                        placeholder='Введите название, ИНН или адрес организации'
                        onChange={this.onInputHandler}
                    />
                    { this.state.suggestions && this.state.suggestions.length && !this.state.closed ? <DadataResult data = {this.state.suggestions} onItemClick={this.onSuggestItemClick}/> : null}
                </div>)
    }
}

export default Dadata;