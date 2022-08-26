//
//  Model.swift
//  Jep
//
//  Created by Anant Singh on 8/16/22.
//

import Foundation
import UIKit




class Model{
    
    let load_cat = NSLocalizedString("str_jep", comment: "")
    var questionArr = [question_item]()
    var qStats: [String: Int] = [:]
    var qaString: [String: String] = [:]
    var boardArr=[[question_item]]()
    var hardCodeCat: [String] = ["IN THE DICTIONARY","ESPN\'s TOP 10 ALL-TIME ATHLETES","PARTS OF PEACH","X\"s & \"O\"s","RHYMES WITH SMART","BE FRUITFUL & MULTIPLY"]
    
    
    
    func loadQuestions()->[question_item]{
        let d = readLocalJSONFile(forName: "jep")
        let q = parse(jsonData: d)
        return q
        
    }
    
    func readLocalJSONFile(forName name: String) -> Data? {
        do {
            if let filePath = Bundle.main.path(forResource: name, ofType: "json") {
                let fileUrl = URL(fileURLWithPath: filePath)
                let data = try Data(contentsOf: fileUrl)
                return data
            }
        } catch {
            print("error: \(error)")
        }
        return nil
    }

    func parse(jsonData: Data?)->[question_item]{
        do {
            let decodedData = try JSONDecoder().decode([question_item].self, from: jsonData!)
            return decodedData
        } catch {
            print("error: \(error)")
        }
        return []
    }
    
   
    
    func analyzeData(qarr: [question_item]?){
        for i in 0..<questionArr.count{
            let q = questionArr[i]
            if (qStats[q.category] == nil){
                qStats[q.category] = 1
            }else{
                qStats[q.category]!+=1
            }
        }
    }

    func initQuestions(qarr: [question_item]?, catArr: [String])->[question_item]{
        var nqarr = [question_item]()
        for i in 0..<catArr.count{
            var catWord = catArr[i]
            for i in 0..<questionArr.count{
                    if questionArr[i].category == catWord{
                    nqarr.append(questionArr[i])
            }
        }
    }
        return nqarr
    }
    
    
    func initBoard(){
        questionArr = loadQuestions()
        analyzeData(qarr: questionArr)
//        print(qStats)
//        print("-----------")
        initQuestions(qarr: questionArr, catArr: hardCodeCat)
        }
    
    
}
