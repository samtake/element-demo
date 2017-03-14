/**
 * Created by xbkaishui on 17/2/16.
 */

const models = [
    {
        "id": 1,
        "ModId": 1,
        "ModName": "指标计算模型",
        "ModType": 10,
        "Status": 1,
        "UserID": "xxx",
        "ModDesc": "用于计算指标的模型"
    },
    {
        "id": 2,
        "ModId": 2,
        "ModName": "数据查询模型",
        "ModType": 90,
        "Status": 1,
        "UserID": "xxx",
        "ModDesc": "用于数据查询模型"
    },
    {
        "id": 22,
        "ModId": 22,
        "ModName": "数据查询模型",
        "ModType": 90,
        "Status": 1,
        "UserID": "xxx",
        "ModDesc": "用于数据查询模型"
    },
    {
        "id": 20,
        "ModId": 20,
        "ModName": "数据查询模型",
        "ModType": 90,
        "Status": 1,
        "UserID": "xxxsssssdd",
        "ModDesc": "用于数据查询模型"
    }
]


const rules =[
    {
        "id": 1,
        "ModId": 0,
        "RuleID": 1,
        "RuleType": 1,
        "RuleContext": "tmp1 = Vol/ timelen(TTime);\r\ntmp2= tmp1/Vol_KD;\r\n x1='RT_10DVolRate';\r\n x2= tmp2;\r\nx3=0;",
        "Status": 1,
        "RuleDesc": "desc"
    },
    {
        "id": 2,
        "ModId": 1,
        "RuleID": 2,
        "RuleType": 1,
        "RuleContext": "tmp1 = Vol/ timelen(TTime);\r\ntmp2= tmp1/Vol_KD;\r\n x1='RT_10DVolRate';\r\n x2= tmp2;\r\nx3=0;",
        "Status": 1,
        "RuleDesc": "desc"
    },
    {
        "id": 3,
        "ModId": 1,
        "RuleID": 3,
        "RuleType": 1,
        "RuleContext": "tmp1 = Vol/ timelen(TTime);\r\ntmp2= tmp1/Vol_KD;\r\n x1='RT_10DVolRate';\r\n x2= tmp2;\r\nx3=0;",
        "Status": 1,
        "RuleDesc": "desc"
    }
]
 const  varis= [
    {
        "id": 10,
        "VariID": 10,
        "VariCode": "Vol",
        "VariName": "总手(总成交量)",
        "VariType": 1,
        "VariTag": 0,
        "VariSrc": "kafka:topic.out.TimeLine_SH,topic.out.TimeLine_SZ",
        "SrcCol": "Vol",
        "SrcColType": "INT",
        "SrcCondition": "${34}"
    },
    {
        "id": 45,
        "VariID": 45,
        "VariCode": "TTime",
        "VariName": "交易时间",
        "VariType": 1,
        "VariTag": 0,
        "VariSrc": "kafka:topic.out.TimeLine_SH,topic.out.TimeLine_SZ",
        "SrcCol": "TTime",
        "SrcColType": "STRING",
        "SrcCondition": "${44}"
    }
]

export  {models, rules, varis}