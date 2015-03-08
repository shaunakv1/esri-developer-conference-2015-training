//
//  ViewController.swift
//  TempConverter
//
//  Copyright (c) 2014 Classroom. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var tempField: UITextField!
    @IBOutlet weak var resultLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func convertAction(sender: AnyObject) {
        let temp = NSString(string: tempField.text).doubleValue
        
        let converter = MyConverter()
        let result = converter.convertToCelsius(temp)
        
        resultLabel.text = "\(result)"
    }

}

