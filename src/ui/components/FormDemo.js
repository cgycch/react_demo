import React, { Component } from 'react';
import * as yup from 'yup';
import { object, reach, array, number, date } from 'yup';
import moment from 'moment';

// yup.mixed;
// yup.string;
// yup.number;
// yup.boolean; // also aliased as yup.bool
// yup.date;
// yup.object;
// yup.array;

// yup.reach;
// yup.addMethod;
// yup.ref;
// yup.lazy;
// yup.setLocale;
// yup.ValidationError;

const contactSchema = yup.object().shape({
    //const contactSchema = yup.object({
    name: yup.string().required(),
    age: yup.number().required().positive().integer().min(18),
    email: yup.string().email(),
    website: yup.string().url(),
    createdOn: yup.date().default(() => new Date())
})

yup.addMethod(yup.date, 'myFormat', function (formats, parseStrict) {
    return this.transform(function (value, originalValue) {
        if (this.isType(value)) return value;

        value = moment(originalValue, formats, parseStrict);

        return date.isValid() ? date.toDate() : 'invalidDate';
    });
});

class FormDemo extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    onClick = () => {
        console.log('onClick...')
        let obj = contactSchema.cast({
            name: 'cch',
            age: '18',
            createdOn: '2019-01-23T19:25:25Z'
        })
        console.log('###1', obj)
        console.log('###2', obj.name)

        let contact = {
            name: 'jimmy',
            age: 28,
            email: 'jdog@cool.biz',
            moreKey: 'abc'
        }
        contactSchema.isValid(contact, { abortEarly: false }).then((result) => {
            console.log("###############################\n")
            console.log('contact is valid:', result)
        });

        let contact2 = {
            name: 'jimmy',
            age: '11',
            email: 'jdog@cool.biz'
        }
        contactSchema.isValid(contact2, { abortEarly: false }).then((result) => {
            console.log("###############################\n")
            console.log('contact2 is valid:', result)
        })

        contactSchema.validate(contact2).then(result => {
            console.log('then:', result)
        }).catch(function (err) {
            console.log('catch:', err)
        }).finally(evt => {
            console.log('finally:', evt)
        });
    }

    onClick2 = () => {
        console.log('click me 2')
        let schema = object().shape({
            nested: object().shape({
                arr: array().of(object().shape({ num: number().max(4) })),
            }),
        });
        reach(schema, 'nested.arr.num').isValid().then(res => { console.log('res', res) });
        reach(schema, 'nested.arr[].num').isValid().then(res => { console.log('res', res) });
        reach(schema, 'nested.arr[1].num').isValid(1).then(res => { console.log('res', res) });
        reach(schema, 'nested["arr"][1].num').isValid(4).then(res => { console.log('res', res) });
        reach(schema, 'nested["arr"][1].num').isValid([4, 5]).then(res => { console.log('res', res) });
    }

    onClick3 = () => {
        console.log('click me 3')
        //   yup.myFormat('yyyy/MM/DD',true).validate('2018/01/01').then(res =>{
        //     console.log('res',res)
        //   }).catch(err =>{
        //     console.log('err',err)
        //   });


        // let schema = yup.object({
        //     isBig: yup.boolean(),
        //     count: yup.number().when('isBig', (isBig, schema) => {
        //       return isBig ? schema.min(5) : schema.min(0);
        //     }),
        //   });
        // schema.validate({ isBig: true, count: 4 }).then(res => {
        //     console.log('res', res)
        // }).catch(function (err) {
        //     console.log('catch:', err)
        // }).finally(evt => {
        //     console.log('finally:', evt)
        // });

        
        // let schema = yup.object().shape({
        //     isBig: yup.boolean(),
        //     isSpecial: yup.boolean(),
        //     count: yup.number().when(['isBig', 'isSpecial'], {
        //         is: true, // alternatively: (isBig, isSpecial) => isBig && isSpecial
        //         then: yup.number().min(5),
        //         otherwise: yup.number().min(0),
        //     }),
        // });

        // schema.validate({
        //     isBig: true,
        //     isSpecial: true,
        //     count: 1,
        // }).then(res => {
        //     console.log('res', res)
        // }).catch(function (err) {
        //     console.log('catch:', err)
        // }).finally(evt => {
        //     console.log('finally:', evt)
        // });

        let schema = yup.object().shape({
            isBig: yup.string(),
            isSpecial: yup.string(),
            count: yup.number().when(['isBig', 'isSpecial'], {
                is:  (isBig, isSpecial) => {
                    if(isBig==='' && isSpecial===''){
                        return false
                    }
                    return true
                },
                then: yup.number().min(5),
                otherwise: yup.number().min(0),
            }),
        });

        schema.validate({
            isBig: '',
            isSpecial: '',
            count: 1,
        }).then(res => {
            console.log('res', res)
        }).catch(function (err) {
            console.log('catch:', err)
        }).finally(evt => {
            console.log('finally:', evt)
        });

    }

    render() {
        return (
            <div>
                <h3>hello FormDemo</h3>
                <button onClick={this.onClick}>click me</button>
                <button onClick={this.onClick2}>click me 2</button>
                <button onClick={this.onClick3}>click me 3</button>
            </div>
        );
    }
}

export default FormDemo;
